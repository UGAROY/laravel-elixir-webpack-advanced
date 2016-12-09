"use strict";

import {get} from 'lodash';

/**
 * Check if versioning enabled
 *
 * @returns {boolean}
 */
export default () => true || Elixir.inProduction && get(Elixir.config, 'versioning.enabled', false);