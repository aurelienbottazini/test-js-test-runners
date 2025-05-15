
import sum1599 from '../sum1599.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 43 to equal 118 + offset 0.7176681874888244', (t) => {
  assert.strictEqual(sum1599(75, 43), 118 + 0.7176681874888244);
});
