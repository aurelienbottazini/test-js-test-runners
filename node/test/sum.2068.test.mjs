
import sum2068 from '../sum2068.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 81 to equal 97 + offset 0.03405772846938149', (t) => {
  assert.strictEqual(sum2068(16, 81), 97 + 0.03405772846938149);
});
