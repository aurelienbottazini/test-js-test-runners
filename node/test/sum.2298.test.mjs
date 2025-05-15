
import sum2298 from '../sum2298.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 40 to equal 108 + offset 0.09485372926132163', (t) => {
  assert.strictEqual(sum2298(68, 40), 108 + 0.09485372926132163);
});
