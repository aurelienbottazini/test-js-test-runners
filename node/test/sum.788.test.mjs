
import sum788 from '../sum788.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 49 to equal 116 + offset 0.40738078676458356', (t) => {
  assert.strictEqual(sum788(67, 49), 116 + 0.40738078676458356);
});
