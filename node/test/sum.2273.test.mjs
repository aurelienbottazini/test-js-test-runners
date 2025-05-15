
import sum2273 from '../sum2273.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 3 to equal 82 + offset 0.4265708520056185', (t) => {
  assert.strictEqual(sum2273(79, 3), 82 + 0.4265708520056185);
});
