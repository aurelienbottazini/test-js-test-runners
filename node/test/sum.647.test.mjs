
import sum647 from '../sum647.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 21 to equal 55 + offset 0.6439701050667446', (t) => {
  assert.strictEqual(sum647(34, 21), 55 + 0.6439701050667446);
});
