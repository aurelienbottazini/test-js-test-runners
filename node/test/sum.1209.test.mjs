
import sum1209 from '../sum1209.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 62 to equal 153 + offset 0.7770262423494773', (t) => {
  assert.strictEqual(sum1209(91, 62), 153 + 0.7770262423494773);
});
