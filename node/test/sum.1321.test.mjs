
import sum1321 from '../sum1321.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 17 to equal 60 + offset 0.08388988222836258', (t) => {
  assert.strictEqual(sum1321(43, 17), 60 + 0.08388988222836258);
});
