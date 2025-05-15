
import sum4231 from '../sum4231.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 99 to equal 101 + offset 0.41598231525613516', (t) => {
  assert.strictEqual(sum4231(2, 99), 101 + 0.41598231525613516);
});
