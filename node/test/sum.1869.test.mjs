
import sum1869 from '../sum1869.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 5 to equal 75 + offset 0.3101476376688891', (t) => {
  assert.strictEqual(sum1869(70, 5), 75 + 0.3101476376688891);
});
