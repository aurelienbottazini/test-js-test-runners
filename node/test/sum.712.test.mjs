
import sum712 from '../sum712.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 9 to equal 62 + offset 0.8435713380665358', (t) => {
  assert.strictEqual(sum712(53, 9), 62 + 0.8435713380665358);
});
