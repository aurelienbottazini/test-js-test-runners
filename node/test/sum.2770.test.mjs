
import sum2770 from '../sum2770.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 7 to equal 67 + offset 0.9141762714695854', (t) => {
  assert.strictEqual(sum2770(60, 7), 67 + 0.9141762714695854);
});
