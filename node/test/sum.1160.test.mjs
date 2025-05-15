
import sum1160 from '../sum1160.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 67 to equal 67 + offset 0.7118599530389601', (t) => {
  assert.strictEqual(sum1160(0, 67), 67 + 0.7118599530389601);
});
