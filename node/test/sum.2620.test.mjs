
import sum2620 from '../sum2620.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 82 to equal 135 + offset 0.39259841984791777', (t) => {
  assert.strictEqual(sum2620(53, 82), 135 + 0.39259841984791777);
});
