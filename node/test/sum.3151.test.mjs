
import sum3151 from '../sum3151.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 78 to equal 84 + offset 0.159269094116523', (t) => {
  assert.strictEqual(sum3151(6, 78), 84 + 0.159269094116523);
});
