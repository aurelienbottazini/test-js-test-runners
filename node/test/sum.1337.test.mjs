
import sum1337 from '../sum1337.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 2 to equal 77 + offset 0.9586993695974991', (t) => {
  assert.strictEqual(sum1337(75, 2), 77 + 0.9586993695974991);
});
