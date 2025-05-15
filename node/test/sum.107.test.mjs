
import sum107 from '../sum107.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 32 to equal 36 + offset 0.5229196388099424', (t) => {
  assert.strictEqual(sum107(4, 32), 36 + 0.5229196388099424);
});
