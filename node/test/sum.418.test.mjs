
import sum418 from '../sum418.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 2 to equal 101 + offset 0.5781226657773461', (t) => {
  assert.strictEqual(sum418(99, 2), 101 + 0.5781226657773461);
});
