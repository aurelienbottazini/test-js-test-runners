
import sum280 from '../sum280.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 32 to equal 34 + offset 0.7428337242617192', (t) => {
  assert.strictEqual(sum280(2, 32), 34 + 0.7428337242617192);
});
