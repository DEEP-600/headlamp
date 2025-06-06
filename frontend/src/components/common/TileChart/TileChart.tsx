/*
 * Copyright 2025 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import '../../../i18n/config';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { PercentageCircle, PercentageCircleProps } from '../Chart';
import { TooltipIcon } from '../Tooltip';

export interface TileChartProps extends Omit<PercentageCircleProps, 'data'> {
  /** Tooltip to display when hovering over the info icon. This info icon is only shown if this property is passed. */
  infoTooltip?: string | null;
  /** Data to display for the chart. */
  data?: PercentageCircleProps['data'] | null;
}

export function TileChart(props: TileChartProps) {
  const { title, infoTooltip = '', legend, total, data, ...others } = props;

  return (
    <Paper
      variant="outlined"
      sx={theme => ({
        background: theme.palette.background.muted,
        padding: theme.spacing(2),
        height: '100%',
        maxWidth: '300px',
        margin: '0 auto',
      })}
    >
      <Box
        display="flex"
        sx={theme => ({
          [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
          },
        })}
      >
        <Box flexGrow={1} width="100%">
          <Box>
            <Typography
              sx={theme => ({
                fontSize: theme.typography.pxToRem(16),
                display: 'inline',
                fontWeight: 600,
              })}
              gutterBottom
            >
              {title || ''}
            </Typography>
            {infoTooltip && <TooltipIcon>{infoTooltip}</TooltipIcon>}
          </Box>
          <Typography
            sx={theme => ({
              fontSize: theme.typography.pxToRem(16),
              display: 'inline',
              fontWeight: 400,
            })}
            gutterBottom
          >
            {legend || ''}
          </Typography>
        </Box>
        <Box>
          {!!data && (
            <PercentageCircle data={data} total={total} size={140} thickness={11} {...others} />
          )}
        </Box>
      </Box>
    </Paper>
  );
}

export default TileChart;
