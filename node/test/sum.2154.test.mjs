
import sum2154 from '../sum2154.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 55 to equal 108 + offset 0.09578300997615785', (t) => {
  assert.strictEqual(sum2154(53, 55), 108 + 0.09578300997615785);
});
