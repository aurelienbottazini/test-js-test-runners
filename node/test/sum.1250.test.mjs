
import sum1250 from '../sum1250.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 42 to equal 71 + offset 0.78219722936498', (t) => {
  assert.strictEqual(sum1250(29, 42), 71 + 0.78219722936498);
});
