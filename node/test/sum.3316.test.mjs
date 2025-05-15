
import sum3316 from '../sum3316.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 94 to equal 103 + offset 0.18039402740031474', (t) => {
  assert.strictEqual(sum3316(9, 94), 103 + 0.18039402740031474);
});
