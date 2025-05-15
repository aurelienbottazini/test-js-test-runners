
import sum3951 from '../sum3951.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 79 to equal 84 + offset 0.7338486295785196', (t) => {
  assert.strictEqual(sum3951(5, 79), 84 + 0.7338486295785196);
});
