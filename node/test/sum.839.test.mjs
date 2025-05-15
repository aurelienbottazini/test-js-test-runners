
import sum839 from '../sum839.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 20 to equal 34 + offset 0.21094943946592992', (t) => {
  assert.strictEqual(sum839(14, 20), 34 + 0.21094943946592992);
});
