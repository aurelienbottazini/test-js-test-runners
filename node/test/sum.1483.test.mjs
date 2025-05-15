
import sum1483 from '../sum1483.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 89 to equal 102 + offset 0.783280022402098', (t) => {
  assert.strictEqual(sum1483(13, 89), 102 + 0.783280022402098);
});
