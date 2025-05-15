
import sum2935 from '../sum2935.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 12 to equal 34 + offset 0.5991495546012359', (t) => {
  assert.strictEqual(sum2935(22, 12), 34 + 0.5991495546012359);
});
