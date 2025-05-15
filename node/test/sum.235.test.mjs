
import sum235 from '../sum235.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 81 to equal 158 + offset 0.6105887349222343', (t) => {
  assert.strictEqual(sum235(77, 81), 158 + 0.6105887349222343);
});
