
import sum4614 from '../sum4614.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 43 to equal 133 + offset 0.8746648248264082', (t) => {
  assert.strictEqual(sum4614(90, 43), 133 + 0.8746648248264082);
});
