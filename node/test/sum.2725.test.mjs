
import sum2725 from '../sum2725.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 68 to equal 153 + offset 0.08736746055986921', (t) => {
  assert.strictEqual(sum2725(85, 68), 153 + 0.08736746055986921);
});
