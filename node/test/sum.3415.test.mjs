
import sum3415 from '../sum3415.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 76 to equal 169 + offset 0.5002758117212555', (t) => {
  assert.strictEqual(sum3415(93, 76), 169 + 0.5002758117212555);
});
