
import sum1073 from '../sum1073.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 52 to equal 127 + offset 0.21700006042706255', (t) => {
  assert.strictEqual(sum1073(75, 52), 127 + 0.21700006042706255);
});
