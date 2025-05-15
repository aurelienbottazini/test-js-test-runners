
import sum1936 from '../sum1936.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 28 to equal 65 + offset 0.4152659758863333', (t) => {
  assert.strictEqual(sum1936(37, 28), 65 + 0.4152659758863333);
});
