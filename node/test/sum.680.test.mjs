
import sum680 from '../sum680.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 48 to equal 136 + offset 0.5996159319165941', (t) => {
  assert.strictEqual(sum680(88, 48), 136 + 0.5996159319165941);
});
