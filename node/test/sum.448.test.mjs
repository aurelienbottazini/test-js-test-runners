
import sum448 from '../sum448.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 47 to equal 116 + offset 0.7221549095142697', (t) => {
  assert.strictEqual(sum448(69, 47), 116 + 0.7221549095142697);
});
