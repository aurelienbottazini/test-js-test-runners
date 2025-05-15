
import sum3479 from '../sum3479.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 34 to equal 63 + offset 0.034016379694129406', (t) => {
  assert.strictEqual(sum3479(29, 34), 63 + 0.034016379694129406);
});
