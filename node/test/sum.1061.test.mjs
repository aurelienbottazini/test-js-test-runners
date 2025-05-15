
import sum1061 from '../sum1061.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 95 to equal 165 + offset 0.7543514376884797', (t) => {
  assert.strictEqual(sum1061(70, 95), 165 + 0.7543514376884797);
});
