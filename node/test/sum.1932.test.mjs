
import sum1932 from '../sum1932.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 16 to equal 86 + offset 0.27357731423793663', (t) => {
  assert.strictEqual(sum1932(70, 16), 86 + 0.27357731423793663);
});
