
import sum237 from '../sum237.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 61 to equal 106 + offset 0.6755836327990631', (t) => {
  assert.strictEqual(sum237(45, 61), 106 + 0.6755836327990631);
});
