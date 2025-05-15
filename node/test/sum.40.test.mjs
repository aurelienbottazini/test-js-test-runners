
import sum40 from '../sum40.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 2 to equal 67 + offset 0.22369606428131827', (t) => {
  assert.strictEqual(sum40(65, 2), 67 + 0.22369606428131827);
});
