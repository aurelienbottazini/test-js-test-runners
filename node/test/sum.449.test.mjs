
import sum449 from '../sum449.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 47 to equal 72 + offset 0.348548457453704', (t) => {
  assert.strictEqual(sum449(25, 47), 72 + 0.348548457453704);
});
