
import sum1890 from '../sum1890.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 51 to equal 60 + offset 0.6120371820102251', (t) => {
  assert.strictEqual(sum1890(9, 51), 60 + 0.6120371820102251);
});
