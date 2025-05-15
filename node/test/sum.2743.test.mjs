
import sum2743 from '../sum2743.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 9 to equal 54 + offset 0.8567154071121016', (t) => {
  assert.strictEqual(sum2743(45, 9), 54 + 0.8567154071121016);
});
