
import sum1015 from '../sum1015.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 15 to equal 89 + offset 0.5899101506107206', (t) => {
  assert.strictEqual(sum1015(74, 15), 89 + 0.5899101506107206);
});
