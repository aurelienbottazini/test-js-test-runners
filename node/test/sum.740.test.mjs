
import sum740 from '../sum740.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 58 to equal 129 + offset 0.5067773628922909', (t) => {
  assert.strictEqual(sum740(71, 58), 129 + 0.5067773628922909);
});
