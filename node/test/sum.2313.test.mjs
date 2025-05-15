
import sum2313 from '../sum2313.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 52 to equal 77 + offset 0.77554762441456', (t) => {
  assert.strictEqual(sum2313(25, 52), 77 + 0.77554762441456);
});
