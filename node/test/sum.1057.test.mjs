
import sum1057 from '../sum1057.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 72 to equal 165 + offset 0.23887400744772846', (t) => {
  assert.strictEqual(sum1057(93, 72), 165 + 0.23887400744772846);
});
