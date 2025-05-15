
import sum1977 from '../sum1977.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 82 to equal 90 + offset 0.6529443738280847', (t) => {
  assert.strictEqual(sum1977(8, 82), 90 + 0.6529443738280847);
});
