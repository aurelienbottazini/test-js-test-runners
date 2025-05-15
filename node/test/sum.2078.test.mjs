
import sum2078 from '../sum2078.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 91 to equal 160 + offset 0.2434185024654979', (t) => {
  assert.strictEqual(sum2078(69, 91), 160 + 0.2434185024654979);
});
