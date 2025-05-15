
import sum2448 from '../sum2448.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 50 to equal 126 + offset 0.9691710155993355', (t) => {
  assert.strictEqual(sum2448(76, 50), 126 + 0.9691710155993355);
});
