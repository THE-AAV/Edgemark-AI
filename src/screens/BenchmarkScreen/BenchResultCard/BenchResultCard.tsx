import React, {useState, useContext} from 'react';
import {View, Linking} from 'react-native';

import {Card, Text, Button, Tooltip} from 'react-native-paper';

import {useTheme} from '../../../hooks';
import {L10nContext} from '../../../utils';

import {createStyles} from './styles';

import {BenchmarkResult} from '../../../utils/types';
import {formatBytes, formatNumber} from '../../../utils';
import {NetworkError, AppCheckError, ServerError} from '../../../utils/errors';

type Props = {
  result: BenchmarkResult;
  onDelete: (timestamp: string) => void;
  onShare: (result: BenchmarkResult) => Promise<void>;
};

type ErrorType = 'network' | 'appCheck' | 'server' | 'generic' | null;

export const BenchResultCard = ({result, onDelete, onShare}: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const l10n = useContext(L10nContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<ErrorType>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    setErrorType(null);

    try {
      await onShare(result);
    } catch (error) {
      if (error instanceof NetworkError) {
        setErrorType('network');
        setSubmitError(error.message);
      } else if (error instanceof AppCheckError) {
        setErrorType('appCheck');
        setSubmitError(error.message);
      } else if (error instanceof ServerError) {
        setErrorType('server');
        setSubmitError(error.message);
      } else {
        setErrorType('generic');
        setSubmitError(
          error instanceof Error
            ? error.message
            : l10n.benchmark.benchmarkResultCard.errors.failedToSubmit,
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDuration = (ms: number) => {
    if (ms < 1000) {
      return `${ms}ms`;
    }
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    if (minutes > 0) {
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${seconds}s`;
  };

  const openLeaderboard = () => {
    Linking.openURL(
      'https://huggingface.co/spaces/a-ghorbani/ai-phone-leaderboard',
    );
  };

  const getErrorIcon = () => {
    switch (errorType) {
      case 'network':
        return '📶'; // wifi icon
      case 'appCheck':
        return '🔒'; // lock icon
      case 'server':
        return '🖥️'; // server icon
      default:
        return '❌'; // generic error icon
    }
  };

  const getRetryText = () => {
    switch (errorType) {
      case 'network':
        return l10n.benchmark.benchmarkResultCard.errors.networkRetry;
      case 'appCheck':
        return l10n.benchmark.benchmarkResultCard.errors.appCheckRetry;
      case 'server':
        return l10n.benchmark.benchmarkResultCard.errors.serverRetry;
      default:
        return l10n.benchmark.benchmarkResultCard.errors.genericRetry;
    }
  };

  const getErrorStyle = () => {
    if (!errorType) {
      return styles.errorGeneric;
    }

    const capitalized = errorType.charAt(0).toUpperCase() + errorType.slice(1);

    return styles[`error${capitalized}`] || styles.errorGeneric;
  };

  return (
    <Card elevation={0} style={styles.resultCard}>
      <Card.Content>
        {/* F1 Racing Header */}
        <View style={styles.racingHeader}>
          <Text style={styles.racingTitle}>🏁 {result.modelName}</Text>
          <Text style={styles.racingSubtitle}>
            {formatBytes(result.modelSize)} • {formatNumber(result.modelNParams, 2, true, false)} params
          </Text>
        </View>

        {/* Performance Grid */}
        <View style={styles.performanceGrid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridValue}>{result.ppAvg.toFixed(1)}</Text>
            <Text style={styles.gridLabel}>PROMPT PROCESSING</Text>
            <Text style={styles.gridUnit}>tokens/sec</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridValue}>{result.tgAvg.toFixed(1)}</Text>
            <Text style={styles.gridLabel}>TOKEN GENERATION</Text>
            <Text style={styles.gridUnit}>tokens/sec</Text>
          </View>
          {result.wallTimeMs && (
            <View style={styles.gridItem}>
              <Text style={styles.gridValue}>{formatDuration(result.wallTimeMs)}</Text>
              <Text style={styles.gridLabel}>TOTAL TIME</Text>
              <Text style={styles.gridUnit}>duration</Text>
            </View>
          )}
          {result.peakMemoryUsage && (
            <View style={styles.gridItem}>
              <Text style={styles.gridValue}>{result.peakMemoryUsage.percentage.toFixed(1)}%</Text>
              <Text style={styles.gridLabel}>PEAK MEMORY</Text>
              <Text style={styles.gridUnit}>usage</Text>
            </View>
          )}
        </View>

        <View style={styles.resultHeader}>
          <View style={styles.headerLeft}>
            <Text variant="titleSmall" style={styles.modelName}>
              {result.modelName}
            </Text>
            <Text style={styles.modelMeta}>
              {formatBytes(result.modelSize)} •{' '}
              {formatNumber(result.modelNParams, 2, true, false)}{' '}
              {l10n.benchmark.benchmarkResultCard.modelMeta.params}
            </Text>
          </View>
          <Button
            testID="delete-result-button"
            mode="text"
            onPress={() => onDelete(result.timestamp)}
            icon="delete"
            compact
            style={styles.deleteButton}>
            {l10n.benchmark.benchmarkResultCard.actions.deleteButton}
          </Button>
        </View>

        <View style={styles.configContainer}>
          <View style={styles.configBar}>
            <Text variant="labelSmall">
              {l10n.benchmark.benchmarkResultCard.config.title}
            </Text>
            <Text style={styles.configText}>
              {l10n.benchmark.benchmarkResultCard.config.format
                .replace('{{pp}}', result.config.pp.toString())
                .replace('{{tg}}', result.config.tg.toString())
                .replace('{{pl}}', result.config.pl.toString())
                .replace('{{nr}}', result.config.nr.toString())}
            </Text>
          </View>

          {result.initSettings && (
            <View style={styles.configBar}>
              <Text variant="labelSmall">
                {l10n.benchmark.benchmarkResultCard.modelSettings.title}
              </Text>
              <View style={styles.configTextContainer}>
                <Text style={styles.configText}>
                  {l10n.benchmark.benchmarkResultCard.modelSettings.context.replace(
                    '{{context}}',
                    result.initSettings.n_ctx.toString(),
                  )}{' '}
                  •{' '}
                  {l10n.benchmark.benchmarkResultCard.modelSettings.batch.replace(
                    '{{batch}}',
                    result.initSettings.n_batch.toString(),
                  )}{' '}
                  •{' '}
                  {l10n.benchmark.benchmarkResultCard.modelSettings.ubatch.replace(
                    '{{ubatch}}',
                    result.initSettings.n_ubatch.toString(),
                  )}
                </Text>
                <Text style={styles.configText}>
                  {l10n.benchmark.benchmarkResultCard.modelSettings.cpuThreads.replace(
                    '{{threads}}',
                    result.initSettings.n_threads.toString(),
                  )}{' '}
                  •{' '}
                  {l10n.benchmark.benchmarkResultCard.modelSettings.gpuLayers.replace(
                    '{{layers}}',
                    result.initSettings.n_gpu_layers.toString(),
                  )}
                </Text>
                {result.initSettings.flash_attn ? (
                  <Text style={styles.configText}>
                    {
                      l10n.benchmark.benchmarkResultCard.modelSettings
                        .flashAttentionEnabled
                    }{' '}
                    •{' '}
                    {l10n.benchmark.benchmarkResultCard.modelSettings.cacheTypes
                      .replace(
                        '{{cacheK}}',
                        result.initSettings.cache_type_k.toString(),
                      )
                      .replace(
                        '{{cacheV}}',
                        result.initSettings.cache_type_v.toString(),
                      )}
                  </Text>
                ) : (
                  <Text style={styles.configText}>
                    {
                      l10n.benchmark.benchmarkResultCard.modelSettings
                        .flashAttentionDisabled
                    }
                  </Text>
                )}
              </View>
            </View>
          )}
        </View>

        <View style={styles.resultsContainer}>
          <View style={styles.resultRow}>
            <View style={styles.resultItem}>
              <Text style={styles.resultValue}>
                {result.ppAvg.toFixed(2)}
                <Text style={styles.resultUnit}>
                  {' '}
                  {l10n.benchmark.benchmarkResultCard.results.tokensPerSecond}
                </Text>
              </Text>
              <Text style={styles.resultLabel}>
                {l10n.benchmark.benchmarkResultCard.results.promptProcessing}
              </Text>
              <Text style={styles.resultStd}>±{result.ppStd.toFixed(2)}</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={styles.resultValue}>
                {result.tgAvg.toFixed(2)}
                <Text style={styles.resultUnit}>
                  {' '}
                  {l10n.benchmark.benchmarkResultCard.results.tokensPerSecond}
                </Text>
              </Text>
              <Text style={styles.resultLabel}>
                {l10n.benchmark.benchmarkResultCard.results.tokenGeneration}
              </Text>
              <Text style={styles.resultStd}>±{result.tgStd.toFixed(2)}</Text>
            </View>
          </View>

          {(result.wallTimeMs || result.peakMemoryUsage) && (
            <View style={styles.resultRow}>
              {result.wallTimeMs && (
                <View style={styles.resultItem}>
                  <Text style={styles.resultValue}>
                    {formatDuration(result.wallTimeMs)}
                  </Text>
                  <Text style={styles.resultLabel}>
                    {l10n.benchmark.benchmarkResultCard.results.totalTime}
                  </Text>
                </View>
              )}
              {result.peakMemoryUsage && (
                <View style={styles.resultItem}>
                  <Text style={styles.resultValue}>
                    {result.peakMemoryUsage.percentage.toFixed(1)}%
                  </Text>
                  <Text style={styles.resultLabel}>
                    {l10n.benchmark.benchmarkResultCard.results.peakMemory}
                  </Text>
                  <Text style={styles.resultStd}>
                    {formatBytes(result.peakMemoryUsage.used, 0)} /{' '}
                    {formatBytes(result.peakMemoryUsage.total, 0)}
                  </Text>
                </View>
              )}
            </View>
          )}
          <Text style={styles.timestamp}>
            {new Date(result.timestamp).toLocaleString()}
          </Text>
        </View>

        <View style={styles.footer}>
          {result.submitted ? (
            <View style={styles.shareContainer}>
              <Text variant="bodySmall" style={styles.submittedText}>
                {l10n.benchmark.benchmarkResultCard.actions.submittedText}{' '}
                <Text onPress={openLeaderboard} style={styles.leaderboardLink}>
                  {l10n.benchmark.benchmarkResultCard.actions.leaderboardLink}
                </Text>
              </Text>
            </View>
          ) : !result.oid ? (
            <Tooltip
              title={
                l10n.benchmark.benchmarkResultCard.actions.cannotShareTooltip
              }>
              <View style={styles.tooltipContainer}>
                <Text variant="bodySmall" style={styles.disabledText}>
                  {l10n.benchmark.benchmarkResultCard.actions.cannotShare}
                </Text>
                <Text style={styles.infoIcon}>ⓘ</Text>
              </View>
            </Tooltip>
          ) : (
            <View style={styles.actionContainer}>
              <Button
                testID="submit-benchmark-button"
                mode="outlined"
                onPress={handleSubmit}
                loading={isSubmitting}
                disabled={isSubmitting}
                icon="share"
                compact
                style={styles.submitButton}>
                {l10n.benchmark.benchmarkResultCard.actions.submitButton}
              </Button>
              <Text
                variant="bodySmall"
                onPress={openLeaderboard}
                style={styles.leaderboardLink}>
                {l10n.benchmark.benchmarkResultCard.actions.viewLeaderboard}
              </Text>
            </View>
          )}
        </View>

        {submitError && (
          <View style={[styles.errorContainer, getErrorStyle()]}>
            <Text style={styles.errorText}>
              {getErrorIcon()} {submitError}
            </Text>
            {errorType && (
              <Button
                mode="text"
                onPress={handleSubmit}
                disabled={isSubmitting || errorType === 'server'}
                compact
                style={styles.retryButton}>
                {getRetryText()}
              </Button>
            )}
          </View>
        )}
      </Card.Content>
    </Card>
  );
};
