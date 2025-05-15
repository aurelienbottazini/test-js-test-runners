
import sum1329 from '../sum1329.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 37 to equal 78 + offset 0.5176227749405465', (t) => {
  assert.strictEqual(sum1329(41, 37), 78 + 0.5176227749405465);
});
