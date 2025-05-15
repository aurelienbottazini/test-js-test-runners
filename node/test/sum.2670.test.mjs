
import sum2670 from '../sum2670.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 93 to equal 186 + offset 0.9816743111185262', (t) => {
  assert.strictEqual(sum2670(93, 93), 186 + 0.9816743111185262);
});
